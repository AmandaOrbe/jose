class AddLanguageToOrders < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_orders, :language, :string
  end
end
