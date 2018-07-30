class RemoveLastnameFromSpreeAddresses < ActiveRecord::Migration[5.2]
  def change
    remove_column :spree_addresses, :lastname, :string
  end
end
