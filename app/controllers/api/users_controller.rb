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


    def create
      puts params
      user = params[:body][:user]
      @user = Users.new(email: user[:email], password: user[:password])
      if @user.save
        log_in?(@user)

        # redirect_to user_url(@user)
        # make a swich if last url is from backbone got to below
        redirect_to root_url

      else
        flash.now[:errors] = @user.errors.full_messages
        render :new
      end
    end

    def update
      @user = Users.find(params[:id])
      puts @user.pictures.nil?

      if @user.update(user_params)

        puts "yes !!!!!!!!!!!!!!!!!!"
        puts photo_params
        puts @user.pictures
        puts"no!!!!!!!!!!!!!!!!!!!!!!"

          # @user.pictures.destroy if !photo_params.empty? && !@user.pictures.nil?

          @user.pictures.create!(photo_params)
          if @user.user_bio.nil?
            UserBio.create(user_bio_params)
          else
            @user.user_bio.update(user_bio_params)
          end
          render :get_current_user

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
