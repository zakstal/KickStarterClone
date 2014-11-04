module Api
  class ProjectsController < ApplicationController

    def show
      puts "heree!!!!!!!!!!!!!!!!!!"
      @project = Project.find(params[:id])
      puts @project
      render :project
    end

    private

    def project_params
      params.require(:project).permit(:user_id, :description, :title, :catagory_id, :duration, :fundinggoal)
    end
  end
end