export class ProofOfActionConsensus {
  private actionHistory: Map<string, ActionRecord[]> = new Map()
  private validationModel: ValidationModel
  private fraudDetector: FraudDetector

  constructor() {
    this.validationModel = new ValidationModel()
    this.fraudDetector = new FraudDetector()
  }

  public async validateAction(action: ActionData): Promise<ValidationResult> {
    const nodeId = action.nodeId
    const actionHistory = this.actionHistory.get(nodeId) || []

    // Real-time fraud detection
    const fraudScore = await this.fraudDetector.analyzeAction(action, actionHistory)

    if (fraudScore > 0.8) {
      return {
        isValid: false,
        confidence: 1 - fraudScore,
        reason: "High fraud probability detected",
        reward: 0,
      }
    }

    // AI-powered action validation
    const validationScore = await this.validationModel.validateAction(action, actionHistory)

    // Calculate dynamic reward based on validation
    const baseReward = this.getBaseReward(action.type)
    const multiplier = this.calculateRewardMultiplier(action, actionHistory, validationScore)
    const finalReward = baseReward * multiplier

    // Store action in history
    const actionRecord: ActionRecord = {
      ...action,
      timestamp: Date.now(),
      validationScore,
      fraudScore,
      reward: finalReward,
    }

    actionHistory.push(actionRecord)
    this.actionHistory.set(nodeId, actionHistory.slice(-100)) // Keep last 100 actions

    return {
      isValid: validationScore > 0.6,
      confidence: validationScore,
      reason: validationScore > 0.6 ? "Action validated" : "Low confidence score",
      reward: finalReward,
      fraudScore,
    }
  }

  private getBaseReward(actionType: string): number {
    const rewards: Record<string, number> = {
      click: 0.1,
      page_visit: 0.5,
      form_submit: 2.0,
      social_share: 5.0,
      nft_mint: 10.0,
      nft_purchase: 15.0,
      transaction: 1.0,
      block_completion: 25.0,
    }

    return rewards[actionType] || 0.1
  }

  private calculateRewardMultiplier(action: ActionData, history: ActionRecord[], validationScore: number): number {
    let multiplier = 1.0

    // Validation score multiplier
    multiplier *= validationScore

    // Frequency penalty (prevent spam)
    const recentSimilarActions = history.filter(
      (a) => a.type === action.type && Date.now() - a.timestamp < 60000,
    ).length

    if (recentSimilarActions > 5) {
      multiplier *= 0.5 // 50% penalty for spam
    }

    // Time-based multiplier
    const hour = new Date().getHours()
    if (hour >= 9 && hour <= 17) {
      multiplier *= 1.2 // Business hours bonus
    }

    // Engagement quality multiplier
    if (action.metadata?.engagement_duration) {
      const duration = action.metadata.engagement_duration
      if (duration > 30000) {
        // 30+ seconds
        multiplier *= 1.5
      } else if (duration < 1000) {
        // Less than 1 second
        multiplier *= 0.3
      }
    }

    return Math.max(0.1, Math.min(3.0, multiplier)) // Clamp between 0.1x and 3.0x
  }

  public getConsensusStats() {
    const totalActions = Array.from(this.actionHistory.values()).reduce((sum, actions) => sum + actions.length, 0)

    const totalRewards = Array.from(this.actionHistory.values())
      .flat()
      .reduce((sum, action) => sum + (action.reward || 0), 0)

    return {
      totalActionsValidated: totalActions,
      totalRewardsDistributed: totalRewards,
      activeNodes: this.actionHistory.size,
      averageValidationScore: this.calculateAverageValidationScore(),
    }
  }

  private calculateAverageValidationScore(): number {
    const allActions = Array.from(this.actionHistory.values()).flat()
    if (allActions.length === 0) return 0

    const totalScore = allActions.reduce((sum, action) => sum + action.validationScore, 0)
    return totalScore / allActions.length
  }
}

class ValidationModel {
  async validateAction(action: ActionData, history: ActionRecord[]): Promise<number> {
    // Simulate AI model validation
    let score = 0.8 // Base score

    // Pattern analysis
    if (this.detectSuspiciousPatterns(action, history)) {
      score -= 0.3
    }

    // Behavioral consistency
    if (this.checkBehavioralConsistency(action, history)) {
      score += 0.1
    }

    // Temporal analysis
    score *= this.analyzeTemporalPatterns(action, history)

    return Math.max(0, Math.min(1, score))
  }

  private detectSuspiciousPatterns(action: ActionData, history: ActionRecord[]): boolean {
    // Check for bot-like behavior patterns
    const recentActions = history.slice(-10)

    // Too regular timing
    if (recentActions.length >= 3) {
      const intervals = []
      for (let i = 1; i < recentActions.length; i++) {
        intervals.push(recentActions[i].timestamp - recentActions[i - 1].timestamp)
      }

      const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length
      const variance =
        intervals.reduce((sum, interval) => sum + Math.pow(interval - avgInterval, 2), 0) / intervals.length

      // Very low variance indicates bot behavior
      if (variance < 100) return true
    }

    return false
  }

  private checkBehavioralConsistency(action: ActionData, history: ActionRecord[]): boolean {
    // Check if action fits user's behavioral pattern
    const userActions = history.filter((a) => a.type === action.type)

    if (userActions.length < 3) return true // Not enough data

    // Analyze typical engagement patterns
    return true // Simplified for demo
  }

  private analyzeTemporalPatterns(action: ActionData, history: ActionRecord[]): number {
    const now = Date.now()
    const recentActions = history.filter((a) => now - a.timestamp < 300000) // Last 5 minutes

    // Penalize excessive activity
    if (recentActions.length > 20) {
      return 0.5
    }

    return 1.0
  }
}

class FraudDetector {
  async analyzeAction(action: ActionData, history: ActionRecord[]): Promise<number> {
    let fraudScore = 0

    // Check for rapid-fire actions
    const recentActions = history.filter((a) => Date.now() - a.timestamp < 10000) // Last 10 seconds
    if (recentActions.length > 10) {
      fraudScore += 0.4
    }

    // Check for impossible action sequences
    if (this.detectImpossibleSequence(action, history)) {
      fraudScore += 0.5
    }

    // Check for duplicate actions
    if (this.detectDuplicateActions(action, history)) {
      fraudScore += 0.3
    }

    return Math.min(1, fraudScore)
  }

  private detectImpossibleSequence(action: ActionData, history: ActionRecord[]): boolean {
    // Check for actions that couldn't happen in sequence
    const lastAction = history[history.length - 1]
    if (!lastAction) return false

    const timeDiff = Date.now() - lastAction.timestamp

    // Actions too close together for human interaction
    if (timeDiff < 100 && action.type !== lastAction.type) {
      return true
    }

    return false
  }

  private detectDuplicateActions(action: ActionData, history: ActionRecord[]): boolean {
    // Check for exact duplicate actions
    return history.some(
      (a) =>
        a.type === action.type &&
        JSON.stringify(a.metadata) === JSON.stringify(action.metadata) &&
        Date.now() - a.timestamp < 5000, // Within 5 seconds
    )
  }
}

// Type definitions
interface ActionData {
  nodeId: string
  type: string
  metadata: any
  timestamp: number
}

interface ActionRecord extends ActionData {
  validationScore: number
  fraudScore: number
  reward: number
}

interface ValidationResult {
  isValid: boolean
  confidence: number
  reason: string
  reward: number
  fraudScore?: number
}

// Singleton instance
export const proofOfActionConsensus = new ProofOfActionConsensus()
