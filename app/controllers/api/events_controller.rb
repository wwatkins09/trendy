class Api::EventsController < ApplicationController

  def index
    @category = Category.find(params[:category_id])
    if params[:five_day]
      @events = @category.events.where("date >= ?", (Time.now.to_i - 345600))
    else
      @events = @category.events
    end
    render 'api/events/index'
  end

  def show
  end

  def create
    @event = Event.new(event_params)
    if (@event.save)
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def event_params
    params.require(:event).permit(:category, :category_id, :quantity, :quality, :duration, :date)
  end

end
