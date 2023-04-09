import random

cards = "A234567890JQK"

def check_points(card, third):
    if card == 'A':
        if third:
            return 1
        else:
            return 11
    elif card == '0' or card == 'J' or card == 'Q' or card == 'K':
        return 10
    else:
        return int(card)

first_card = random.randint(0, 12)
second_card = random.randint(0, 12)
result = check_points(cards[first_card], False) + check_points(cards[second_card], False)
print("Your cards are: ", cards[first_card], ' ' , cards[second_card], ' Your result: ', result)

if cards[first_card]+cards[second_card] == 'AA' or result == 21:
    print('You won!')
else:
    if input('Do you want to take the third card?(Y/N)').lower() == 'y':
        third_card = random.randint(0, 12)
        result += check_points(cards[third_card], True)
        print("Your card is: ", cards[third_card], ' Your result: ', result)
        if result < 22:
            print('You won!')
        else:
            print('You lose!')
    else:
        print('Your result: ', result)