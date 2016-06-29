days_of_the_week = %w[
  Monday
  Tuesday
  Wednesday
  Thursday
  Friday
  Saturday
  Sunday
]

# day = days_of_the_week.pop
# days_of_the_week.unshift day

# days_of_the_week.unshift days_of_the_week.pop

days_of_the_week.rotate! -1
p days_of_the_week

days_of_the_week2 = [
  days_of_the_week[1..5], # Weekdays
  [days_of_the_week.last, days_of_the_week.first] # Week end days
]

p days_of_the_week2

days_of_the_week2.pop

p days_of_the_week2

days_of_the_week2.flatten!
days_of_the_week2.sort!
p days_of_the_week2
