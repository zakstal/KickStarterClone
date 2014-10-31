class RewardsController < ApplicationController

    before_filter :require_logged_in, except: [:show]

  def index
    @rewards = Reward.where(project_id: params[:project_id])
    @rewards << Reward.new(project_id: params[:project_id])
  end

  def new
    @reward = Reward.new(project_id: params[:project_id])
  end

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      redirect_to  project_rewards_url(@reward.project_id)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @reward = Reward.find(params[:id])
  end

  def update
    @reward = Reward.find(params[:id])
    if @reward.update_attributes(reward_params)
      redirect_to project_rewards_url(@reward.project_id)
    else
      flash.now[:errors] = @reward.errors.full_messages
      render :edit
    end


  end

  def show
    @reward = Reward.find(params[:id])
  end

  def destroy
    @reward = Reward.find(params[:id])
    @reward.destroy
    redirect_to rewards_url
  end

  private

  def reward_params
    params.require(:reward).permit(:backer_id, :project_id, :pledge_amt, :description, :est_delivery, :qty)
  end
end
