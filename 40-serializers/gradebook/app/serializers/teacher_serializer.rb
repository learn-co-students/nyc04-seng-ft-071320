class TeacherSerializer < ActiveModel::Serializer
  # Any instance method can be sent out via the attributes
  attributes :id, :name, :subject, :professor_name, :lawyer_name
  
  # Writing AR Macros in your serializer calls on the appropriate serializer
    # You need to make sure that the AR macro is written in your model
  has_many :classrooms


  def lawyer_name
    the_instance_you_are_serializing = self.object
    "#{the_instance_you_are_serializing.name} esq."
  end

end
