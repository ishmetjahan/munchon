class SnacksController < ApplicationController

    def index
        @snacks= Snack.all 
        render json: @snacks  
    end

    def show
        render json: @snack
    end

    def edit 
        render json: @snack
    end

  def create
    @snack = Snack.new(snack_params)

    if @snack.save
      render json: @snack, status: :created, location: @snack
    else
      render json: @snack.errors, status: :unprocessable_entity
    end
  end

    private 
    def snack_params
        params.require(:snack).permit(:name, :description, :image, :vote)
    end
    
    def find_snack
        @snack = Snack.find(params[:id])
    end
end
