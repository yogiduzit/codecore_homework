class CookieBag
  def initialize(capacity = 10)
    @capacity = 10;
    @cookies = Array.new
  end

  def add_cookie(cookie)
    unless cookie.is_a? Cookie
      raise ArgumentError.new("Passed argument must be a cookie");
    end
    if (@cookies.length >= @capacity)
      puts "Eat some cookies first"
    else
      @cookies.push(cookie)
    end
  end

  def take_cookie
    @cookies.pop
  end
  
  attr_accessor(:cookies, :capacity)
end