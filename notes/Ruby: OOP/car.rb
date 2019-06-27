class Car

  # The initialize method is a special method that is called when a 
  # class is initialized. This is like the constructor.

  def initialize(model, type="sedan", capacity=4)
    unless model.is_a? String
      raise ArgumentError.new("Model must be a string")
    end
    # Instance variables
    @model = model
    @type = type
    @capacity = capacity

    # Class variables (Private Static)
    @@gas_price = 1.22
    
  end
  $yogi = "yogi";
  # Prefix a word with $ to create a global variable.
  # 98% of the time, don't use global variable

  def drive
    pump_gas
    ignite_engine
    puts "Vroom Vroom !"
  end

  def stop 
    puts "Screech"
  end

  def park
    puts "ticket"
  end

  def self.max_speed # Static Method
    200
  end

  private

  def pump_gas
    puts "Glug Glug"
  end

  def ignite_engine
    puts "🏎🔥🔥🔥"
  end
end
