require 'pry'
require 'require_all'

require_all 'models'


spongebob = Student.new("Spongebob")
patrick= Student.new("Patrick")
eric = Student.new("Eric")

puff= Instructor.new("Ms.Puff")
krabs= Instructor.new("Mr.Krabs")
sandy = Instructor.new("Sandy")

# student, test_name, test_status, instructor
test1 = BoatingTest.new(spongebob, "101 boats", "pending", krabs)
test2 = BoatingTest.new(patrick, "101 boats", "passed", krabs)

# krabs.all_tests
# krabs.all_students

# krabs.passed_students
# success => I will get patrick
# failure => I will get patrick and spongebob or nothing or ....

# sandy.test_outcome("Eric", "101 animal crossing", "passed")

sandy.test_outcome("Spongebob", "101 boats", "passed")

# sandy.pass_student("Eric", "101 animal crossing")
# sandy.pass_student("Patrick", "boating for pros")
# # success => I will be able to create a new boating test for Eric 

# krabs.pass_student("Spongebob", "101 boats")
# 2nd success => I will be able to update spongebob's test 

binding.pry

no_crashing = spongebob.add_boating_test("Don't Crash 101", "pending", puff)
power_steering_failure = patrick.add_boating_test("Power Steering 202", "failed", puff)
power_steering_pass = patrick.add_boating_test("Power Steering 201", "passed", krabs)

binding.pry
0