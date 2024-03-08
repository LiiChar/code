#include <iostream>

using namespace std;



Bank::Bank(int balance)
{
    this.balance = balance
}

void Bank::show_balance()
{
    cout << this.balance << endl;
}