module Api
  class MessagesController < ApplicationController
    def create
      puts "!!!!!!!!!message!!!!!!!!!"
      @message = Message.create!(message_params)

      render json: @message
    end

    def message_params
      params.require(:message).permit(:message, :from_user_id, :to_user_id)
    end
  end
end
