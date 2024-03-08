#include <iostream>
#include <vector>
#include <math.h>
#include <math.h>

class Solution
{
public:
    int maxProfit(std::vector<int> &prices)
    {
        int max_profit = 0;
        int min_price = prices[0];

        for (int i = 1; i < prices.size(); i++) {
            max_profit = std::max(max_profit, prices[i] - min_price);
            min_price = std::min(prices[i], min_price);
        }

        return max_profit;
    }
};

int main()
{
    Solution s = Solution();

    std::vector<int> v = {2, 4, 6, 1, 3, 5}; // 4 = 5 - 1

    int res = s.maxProfit(v);

    std::cout << res << std::endl;

    return 0;
}