module Api
  class ProjectsController < ApplicationController

    def show
      @project = Project.find(params[:id])
      render json: @project
    end

    private

    def project_params
      params.require(:project).permit(:user_id, :description, :title, :catagory_id, :duration, :fundinggoal)
    end
  end
end