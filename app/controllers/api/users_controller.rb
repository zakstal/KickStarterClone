module Api
  class UsersController < ApplicationController

    def get_current_user
      if current_user
        @user = Users.find(current_user.id)
          render :get_current_user
      else
        render json: {}
      end
    end

    def update
      @user = Users.find(params[:id])

      if @user.update(user_params)

          if @user.user_bio.nil?
            UserBio.create(user_bio_params)
          else
            @user.user_bio.update(user_bio_params)
          end
          render json: @user
          
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end

    end

    def user_params
      params.require(:user).permit(:email, :password)
    end

    def user_bio_params
      params.require(:user).permit(:username, :bio, :user_id)
    end
  end
end
