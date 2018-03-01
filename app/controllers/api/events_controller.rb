class Api::EventsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    render 'api/events/index'
  end

  def show
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id
    @user = current_user
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
    params.require(:event).permit(:category, :user_id, :quantity, :quality, :duration, :date)
  end

end
