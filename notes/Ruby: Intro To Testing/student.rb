class Student
  def initialize(first_name, last_name, score)
    if first_name.nil? || last_name.nil? || score.nil?
      raise ArgumentError.new "Please enter all fields"
    else
      @first_name = first_name
      @last_name = last_name
      @score = score
    end
  end
  
  def full_name
    "#{@first_name} #{@last_name}"
  end

  def grade
    case @score
    when 0..30
      return "F"
    when 31..40
      return "E"
    when 41-60
      return "D"
    when 61-70
      return "C"
    when 71-90
      return "B"
    when 91-100
      return "A"
    end
  end
end