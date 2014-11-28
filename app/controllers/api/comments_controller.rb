module Api
  class CommentsController < ApplicationController
    def create
      @comment = Comment.create!(comment_params)

      render json: @comment
    end
  end

  def comment_params
    params.require(:comment).permit(:user_id, :project_id, :comment)
  end
end
