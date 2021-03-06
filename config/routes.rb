Rails.application.routes.draw do
  get 'ishvara/historia'
  get 'ishvara/prensa'
  get 'ishvara/pasarela'
  # This line mounts Solidus's routes at the root of your application.
  # This means, any requests to URLs such as /products, will go to Spree::ProductsController.
  # If you would like to change where this engine is mounted, simply change the :at option to something different.
  #
  # We ask that you don't use the :as option here, as Solidus relies on it being the default of "spree"
  scope '(:locale)', locale: /fr|es|en/ do

  # scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/, defaults: {locale: "en"} do


     get "/", to: "spree/home#index", as: :locale_root

    get "/", to: "spree/home#index", as: :root

  mount Spree::Core::Engine, at: '/'

end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
