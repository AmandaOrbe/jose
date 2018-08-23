class AddLastnameToSpreeAddresses < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_addresses, :lastname, :string
  end
end
