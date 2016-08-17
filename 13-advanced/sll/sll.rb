class SinglyLinkedList

  include Enumerable # This is mixin

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) if value
  end

  def last
    current_node = @head
    until current_node.next.nil?
      current_node = current_node.next
    end
    current_node
  end

  def prepend(value) # .unshift
    node = Node.new value
    node.next = @head
    @head = node
    self
  end

  def append(value) # .push
    node = Node.new value
    last.next = node
    self
  end

  def insert_after(node, new_node)
    # TODO
  end

  def shift
    # TODO
  end

  def length
    # TODO
  end

  def find(needle)
    # Return the first node with the value of needle
  end

  def reverse
    reverse_list = SinglyLinkedList.new
    node = @head
    while node
      reverse_list.prepend node.value
      node = node.next
    end
    reverse_list
  end

  def reverse!
    @head = reverse.head
  end

  def each
    node = @head
    while node
      yield node.value if block_given?
      node = node.next
    end
    self
  end

  class Node
    attr_accessor :value, :next
    def initialize(value=nil)
      @value = value
    end
  end

end

# require 'pry'
# binding.pry
