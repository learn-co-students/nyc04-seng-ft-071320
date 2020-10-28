class UsersController < ApplicationController
    before_action :authorized, only: [:keep_logged_in]

    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            wristband_token = encode_token({user_id: @user.id})

            render json: {
                user: UserSerializer.new(@user), 
                token: wristband_token
            }

        else
            render json: {error: "INCORRECT USERNAME OR PASSWORD"}, status: 422
        end
    end

    def keep_logged_in
        # @user exists here because of the before_action
        wristband_token = encode_token({user_id: @user.id})

        render json: {
            user: UserSerializer.new(@user), 
            token: wristband_token
        }
    end


    # BAD PRACTICE TO INCLUDE A SHOW ACTION
    def show
        @user = User.find(params[:id])
        render json: {
            user: UserSerializer.new(@user), 
            token: wristband_token
        }
    end
end
