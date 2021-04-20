export default {
    rpc: {
        quote: {
            description: 'Get price with indicated Asset amount and direction, filtered by selected_types',
            params: [
                {
                    name: 'dexId',
                    type: 'DEXId'
                },
                {
                    name: 'inputAssetId',
                    type: 'AssetId'
                },
                {
                    name: 'outputAssetId',
                    type: 'AssetId'
                },
                {
                    name: 'amount',
                    type: 'String'
                },
                {
                    name: 'swapVariant',
                    type: 'SwapVariant'
                },
                {
                    name: 'selectedSourceTypes',
                    type: 'Vec<LiquiditySourceType>'
                },
                {
                    name: 'filterMode',
                    type: 'FilterMode'
                },
            ],
            type: 'Option<LPSwapOutcomeInfo>'
        },
        isPathAvailable: {
            description: 'Check if given two arbitrary tokens can be exchanged via any liquidity sources',
            params: [
                {
                    name: 'dexId',
                    type: 'DEXId'
                },
                {
                    name: 'inputAssetId',
                    type: 'AssetId'
                },
                {
                    name: 'outputAssetId',
                    type: 'AssetId'
                },
            ],
            type: 'bool'
        },
        listEnabledSourcesForPath: {
            description: 'Given two arbitrary tokens, list liquidity sources that can be used along the path.',
            params: [
                {
                    name: 'dexId',
                    type: 'DEXId'
                },
                {
                    name: 'inputAssetId',
                    type: 'AssetId'
                },
                {
                    name: 'outputAssetId',
                    type: 'AssetId'
                },
            ],
            type: 'Vec<LiquiditySourceType>'
        }
    },
    types: {
        LPSwapOutcomeInfo: {
            amount: 'Balance',
            fee: 'Balance',
            rewards: 'Vec<LPRewardsInfo>',
            amount_without_impact: 'Balance'
        },
        LPRewardsInfo: {
            amount: 'Balance',
            currency: 'AssetId',
            reason: 'RewardReason'
        }
    }
}
