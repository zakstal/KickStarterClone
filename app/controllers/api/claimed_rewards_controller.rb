module Api
  class ClaimedRewardsController < ApplicationController

    def create
      @claimed = ClaimedRewards.create!(claimed_params)

      render json: @claimed
    end

    private

    def claimed_params
      params.require(:claim).permit(:reward_id, :user_id)
    end
  end
end
