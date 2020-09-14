arr = [1,2,3,4]

def is_it_even(number)
  if number.even?
    puts "It is even."
  else
    puts "It is odd."
  end
end

is_it_even(2)

arr.each_with_index do |num, idx|
  is_it_even(num)
end


