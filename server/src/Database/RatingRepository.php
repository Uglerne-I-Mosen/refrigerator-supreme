<?php
namespace Api\Database;

class RatingRepository extends Repository
{
    protected function getTable()
    {
        return 'ratings';
    }

    protected function getSelect()
    {
        return ['id', 'item_id', 'user_id', 'rating'];
    }

    /**
     * @param $id Int The id of an Item
     * @return array|bool
     */
    public function On($id) {
        return $this->Select(['item_id'=>$id]);
    }

    public function ByUserId($id) {
        return $this->Select(['user_id'=>$id]);
    }

    public function FindById($id)
    {
        return $this->Get(compact('id'));
    }

    public function OnBy($item_id, $user_id)
    {
        return $this->Get(compact('item_id', 'user_id'));
    }

    public function RatingOf($item_id)
    {
        return $this->db->avg($this->table, 'rating', compact('item_id'));
    }
}