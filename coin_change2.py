# Exercicio: Coin Change II
# Link: https://leetcode.com/problems/coin-change-ii/

class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        res = [[0] * (len(coins)+1) for i in range(amount+1)]
        res[0] = [1] * (len(coins) + 1)

        for a in range(1, amount + 1):
            for i in range(len(coins) - 1, -1, -1):
                res[a][i] = res[a][i+1]
                if a - coins[i] >= 0:
                    res[a][i] += res[a - coins[i]][i]
        return res[amount][0]

        cache = {}

        def dfs(i, a):
            if a == amount:
                return 1
            if a > amount:
                return 0
            if i == len(coins):
                return 0
            if(i, a) in cache:
                return cache[(i,a)]

            cache[(i,a)] = dfs(i, a+coins[i] + dfs(i+1, a))

            return cache[(i, a)]
        return dfs(0, 0)
