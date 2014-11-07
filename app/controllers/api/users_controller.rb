module Api
  class UsersController < ApplicationController

    def get_current_user
      if current_user
        @user = Users.find(current_user.id)
        puts "@@@@@@@@@@@@@@@@@@@@@@"
        # puts @user.pictures.first.pic.url(:small)
          render :get_current_user
      else
        render json: {}
      end
    end

    def update
      @user = Users.find(params[:id])
      puts @user.pictures.nil?
      
      if @user.update(user_params)

          @user.pictures.destroy if !photo_params.empty? && !@user.pictures.nil?

          @user.pictures.create!(photo_params)
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

    def photo_params
      params.permit(:pic)
    end

  end
end
