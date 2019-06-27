class Dog
  def initialize(colour, type)
    @colour = colour
    @type = type
    @bones = Array.new
  end

  def add_bone(bone)
    unless bone.is_a? Bone
      raise ArgumentError("This is not a bone! idiot hooman")
    end
    if (@bones.length >= 3)
      raise ArgumentError("mucc bones! take em away hooman")
    else
      @bones << bone
    end
  end

  def eat_bone
    bone = @bones.pop
    return "I ate #{bone.size} bone"
  end

end

class Bone
  attr_reader(:size)
  def initialize(size)
    @size = size
  end
end
