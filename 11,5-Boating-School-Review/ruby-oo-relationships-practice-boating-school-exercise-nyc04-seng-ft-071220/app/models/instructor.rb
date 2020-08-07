require 'pry'

class Instructor

    attr_accessor :instructor_name

    @@all = []

    def initialize(instructor_name)
        @instructor_name = instructor_name
        @@all << self
    end

    def self.all
        @@all 
    end

    def all_tests
        # binding.pry
        # 1. access BoatingTest.all + get all the instructor's tests
        BoatingTest.all.select{|test| test.instructor == self}
        # BoatingTest.all.select{|test| test}
    end

    def all_students
        # 2. from the instructor's tests, get all the students
        # binding.pry
        self.all_tests.map{|test| test.student}
        # self.all_tests.map(&:student)
    end

    def all_passed_tests
        self.all_tests.select{|test| test.test_status == "passed"}
    end

    def passed_students
        self.all_passed_tests.map{|test| test.student}
        # binding.pry
        # self.all_tests
    end

    def find_student(name)
        # 1. go to the student.all 
        # 2. find the student
        Student.all.find{|student| student.student_name == name} 
    end

    def find_test(test_name_str)
        BoatingTest.all.find{|test| test.test_name == test_name_str}
    end

    def pass_student(name_str, test_name_str)
        test = find_test(test_name_str)

        if test && test.student.student_name == name_str
            test.test_status = "passed"
        else 
            student = find_student(name_str)
            BoatingTest.new(student, test_name_str, "passed", self)
        end
        # 1. Create a BoatingTest with the found student
        # student, test_name, test_status, instructor
    end
end

# 1. find the student
# 2. pass student / fail student

# * `Instructor#pass_student` should take in 
#  - parameters: a student instance and test name. 

#  condition: `BoatingTest` exists (with this name and student) -> update the status of that BoatingTest to 'passed'. 
# 2nd condition: no matching test -> create a test with the student, that boat test name, and the status 'passed'. 
# Either way, it should return the `BoatingTest` instance.

# * `Instructor#fail_student` should take in a student instance and test name. Like `#pass_student`, it should try to find a matching `BoatingTest` and update its status to 'failed'. If it cannot find an existing `BoatingTest`, it should create one with the name, the matching student, and the status 'failed'.



# `Instructor` class:
# * initialize with a name
# * `Instructor.all` should return all instructors

# Instructor -< BoatingTest >- Student

# * `Instructor#all_students` should return an array of students who took a boating test with this specific instructor. 

# * `Instructor#passed_students` should return an array of students who passed a boating test with this specific instructor.

