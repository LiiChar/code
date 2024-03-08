
#include <iostream>
#include <vector>

using namespace std;

template <typename Container>
void Print(const Container& data, const string& delimiter) {
    for (int i = 0; i < data.size(); i++) {
        if (i == data.size() - 1) {
            cout << data[i];
        } else {
            cout << data[i] << delimiter;
        }
    }
}

int main () {
    vector<int> v = {1, 1, 2, 2,};

    Print(v, ", ");
    return 0;
}