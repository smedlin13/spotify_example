Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'billboards#index'

  resources :billboards do 
    resources :artists
  end

  #   resources :artists, except: [:index, :new, :create, :show, :update, :destroy] do
  #     resources :songs
  #   end
end
