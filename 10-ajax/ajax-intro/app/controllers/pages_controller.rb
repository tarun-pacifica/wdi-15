class PagesController < ApplicationController
  def home
  end

  def time
    render :text => Time.now
  end

  def bros
    render :text => %w{ Groucho Harpo Chico Zeppo Gummo }.sample
  end

  def lotto
    render :text => (1..40).to_a.sample
  end

  def info
    info = {
      :time => Time.now,
      :lotto => Random.rand(1..40),
      :bros => %w{ Groucho Harpo Chico Zeppo Gummo }.sample,
      :uptime => `uptime`
    }
    render :json => info
  end
end
