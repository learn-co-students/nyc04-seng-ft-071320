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

        BoatingTest.all.select{|test| test.test_name == test_name_str}
    end

    # krabs.test_outcome("eric", "animal crossing for pros", "passed")
    def test_outcome(name_str, test_name_str, result_str)
        test = find_test(test_name_str)
        student = find_student(name_str)

        if test_present?(student, test)
            test.test_status = result_str
        else 
            BoatingTest.new(student, test_name_str, result_str, self)
        end
    end

    def test_present?(student, test)
        binding.pry
        test && test.student == student
    end

    # def pass_student(name_str, test_name_str)
    #     test = find_test(test_name_str)

    #     if test && test.student.student_name == name_str
    #         test.test_status = "passed"
    #     else 
    #         student = find_student(name_str)
    #         BoatingTest.new(student, test_name_str, "passed", self)
    #     end
    # end

    # def fail_student(name_str, test_name_str)
    #     test = find_test(test_name_str)

    #     if test && test.student.student_name == name_str
    #         test.test_status = "failed"
    #     else 
    #         student = find_student(name_str)
    #         BoatingTest.new(student, test_name_str, "failed", self)
    #     end
    # end
end

# * `Instructor#fail_student` should take in a student instance and test name. Like `#pass_student`, it should try to find a matching `BoatingTest` and update its status to 'failed'. If it cannot find an existing `BoatingTest`, it should create one with the name, the matching student, and the status 'failed'.


# Instructor -< BoatingTest >- Student