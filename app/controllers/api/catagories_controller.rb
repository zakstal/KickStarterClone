class CatagoriesController < ApplicationController
  def index
    @cats = Catagorie::CATAGORIES
  end
end
