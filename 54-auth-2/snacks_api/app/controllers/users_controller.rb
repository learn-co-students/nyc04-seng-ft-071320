class UsersController < ApplicationController

    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            render json: @user
        else
            render json: {error: "INCORRECT USERNAME OR PASSWORD"}, status: 422
        end
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            render json: @user
        else
            render json: {error: "INVALID USER"}, status: 422
        end
    end


    private

    def user_params
        # params = {username: "", password: "", user: {username: ""}}
        # Don't use `require` here
        params.permit(:username, :password)
    end
end
