import sys
from fractions import Fraction

_, *args = sys.argv
    a, c, b, d = [int(str) for arg in args for str in arg.split('/')]

sum = Fraction(a, c) + Fraction(b, d)

if sum.denominator == 1:
  print(sum.numerator)
elif sum.numerator > sum.denominator:
  whole_part = int(sum.numerator / sum.denominator)
  print(f'{whole_part} {sum.numerator % sum.denominator}/{sum.denominator}')
else:
  print(f'{sum.numerator % sum.denominator}/{sum.denominator}')