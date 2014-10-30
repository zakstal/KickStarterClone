# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141030143801) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "catagories", force: true do |t|
    t.string   "catagory"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "project_id", null: false
  end

  create_table "projects", force: true do |t|
    t.string   "title",                       null: false
    t.string   "description"
    t.string   "catagory_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "duration"
    t.string   "fundinggoal"
    t.boolean  "active",      default: true
    t.boolean  "funded",      default: false
  end

  add_index "projects", ["catagory_id"], name: "index_projects_on_catagory_id", using: :btree
  add_index "projects", ["title"], name: "index_projects_on_title", unique: true, using: :btree
  add_index "projects", ["user_id"], name: "index_projects_on_user_id", using: :btree

  create_table "rewards", force: true do |t|
    t.integer  "backer_id"
    t.integer  "project_id",   null: false
    t.integer  "pledge_amt",   null: false
    t.string   "description",  null: false
    t.string   "est_delivery", null: false
    t.integer  "qty",          null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "rewards", ["backer_id"], name: "index_rewards_on_backer_id", using: :btree
  add_index "rewards", ["pledge_amt"], name: "index_rewards_on_pledge_amt", using: :btree
  add_index "rewards", ["project_id"], name: "index_rewards_on_project_id", using: :btree

  create_table "stories", force: true do |t|
    t.string   "story",      null: false
    t.string   "challenges", null: false
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "stories", ["project_id"], name: "index_stories_on_project_id", using: :btree

  create_table "user_bios", force: true do |t|
    t.string   "username"
    t.string   "bio"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "user_id"
  end

  add_index "user_bios", ["username"], name: "index_user_bios_on_username", unique: true, using: :btree

  create_table "users", force: true do |t|
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",           null: false
    t.string   "filepicker_url"
  end

end
