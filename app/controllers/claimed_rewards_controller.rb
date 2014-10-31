class ClaimedRewardsController < ApplicationController

  def create
    @claimed = ClaimedRewards.new(claimed_params)

    @claimed.save
    redirect_to project_url(@claimed.project_id)
  end

  private

  def claimed_params
    params.require(:claimed).permit(:project_id, :user_id)
  end
end
