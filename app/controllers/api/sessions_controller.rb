module Api
  class SessionsController < ApplicationController

    # before_filter :require_logged_in

    def create
      puts params
      puts "here***************************"
      @user = Users.find_by_credentials(
        params[:body][:user][:email],
        params[:body][:user][:password]
      )

      if @user
        log_in?(@user)
        puts "succesful"
        # redirect_after_require_login_or(user_url(@user))
        render json: @user
      else
        # @user = Users.new
        render json: 'Invalid username or password'
      end
    end

    def destroy
      log_out
      redirect_to root_url
    end

  end
end
