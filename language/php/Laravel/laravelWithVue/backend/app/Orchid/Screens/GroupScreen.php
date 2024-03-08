<?php

namespace App\Orchid\Screens;

use App\Models\Artist;
use App\Models\Group;
use App\Models\Music;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Screen;
use Orchid\Screen\TD;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Layout;

class GroupScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [
            'groups' => Group::all()
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'GroupScreen';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            ModalToggle::make('Add group')
            ->modal('groupModal')
            ->method('create')
            ->icon('bs.brush-fill')
        ];
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            Layout::table('groups', [
                TD::make('name', 'name'),
                TD::make('music', 'Musics')
                    ->render(function (Group $group) {
                        return view('list', [
                            'elements' => $group->music
                        ]);
                    }),
                TD::make('artists', 'Artists')
                    ->render(function (Group $group) {
                        return view('list', [
                            'elements' => $group->artists
                        ]);
                    }),
                TD::make('cover_group')
                    ->render(function (Group $group) {
                        return view('image', [
                            'image' => $group->cover_group
                        ]);
                    })
            ]),

            Layout::modal('groupModal', Layout::rows([
                Input::make('name')->title('Name')->placeholder('input artist name'),
                Relation::make('artists')->multiple()->title('Artists')->fromModel(Artist::class, 'username', 'id'),
                Relation::make('musics')->multiple()->title('Musics')->fromModel(Music::class, 'name', 'id'),
                Picture::make('cover_group')
                    ->storage('group')
            ]))
        ];
    }

    public function create(Request $request)
    {
        $groupValidate = $request->validate([
            'name' => 'required|min:3',
            'cover_group' => 'required',
        ]);
        
        $group = Group::create($groupValidate);

        $group->music()->attach($request->musics);
        $group->artists()->attach($request->artists);

        Alert::message('Successfully created group');
    }
}
