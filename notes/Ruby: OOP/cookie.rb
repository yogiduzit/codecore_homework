class Cookie

  def initialize(sugar, flour)
    puts "Cookie materializing..."

    @sugar = sugar
    @flour = flour

    @@color = "Brown"
  end

  attr_accessor(:sugar, :flour)

  def eat 
    bake
    "Nom Nom Nom"
  end

  def self.info
    "I'm in the cookie class"
  end

  private
  def bake
    "Baking the cookie"
  end

end