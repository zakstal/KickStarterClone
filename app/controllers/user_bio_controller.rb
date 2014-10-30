class UserBioController < ApplicationController

  def new
    @user_bio = UserBio.new(user_id: current_user.id)

  end

  def create
    @user_bio = UserBio.new(user_bio_params)
    if @user_bio.save
      redirect_to user_url(@user_bio.user_id)
    else
      flash.now[:errors] = @user_bio.errors.full_messages
      render :new
    end
  end

  def edit
    @user_bio = UserBio.find(params[:id])
  end

  def update
    @user_bio = UserBio.find(params[:id])
    if @user_bio.update_attributes(user_bio_params)
      redirect_to user_url(@user_bio.user_id)
    else
      flash.now[:errors] = @user_bio.errors.full_messages
      render :edit
    end


  end

  def show
    @user_bio = UserBio.find(params[:id])
  end

  def destroy
    @user_bio = UserBio.find(params[:id])
    @user_bio.destroy
    redirect_to user_url(@user_bio.user_id)
  end

  private

  def user_bio_params
    params.require(:user_bio).permit(:username, :bio, :user_id, :filepicker_url)
  end

end
