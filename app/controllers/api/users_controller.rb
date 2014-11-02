module Api
  class UsersController < ApplicationController

    def cuser
      if current_user
        @user = Users.find(current_user.id)
          render :cuser
      else
        render json: {}
      end
    end
  end
end