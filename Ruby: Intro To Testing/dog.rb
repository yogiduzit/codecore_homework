class Dog
  def initialize
    @bones = []
  end

  def give_bone(bone)
    if @bones.length >= 3
      puts "Too many bones for me, urgh"
    else
      @bones.push(bone)
    end
  end

  def eat_bone
    @bones.pop
  end

  def bone_count
    @bones.length
  end
end
