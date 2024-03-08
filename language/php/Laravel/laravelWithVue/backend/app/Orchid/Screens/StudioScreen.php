<?php

namespace App\Orchid\Screens;

use App\Models\Group;
use App\Models\Studio;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Screen;
use Orchid\Screen\TD;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Layout;

class StudioScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [
            'studios' => Studio::all()
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'StudioScreen';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            ModalToggle::make('Add studio')
                ->modal('studioModal')
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
            Layout::table('studios', [
                TD::make('name', 'name'),
                TD::make('description', 'Description'),
                TD::make('music', 'Musics')
                    ->render(function (Studio $group) {
                        return view('list', [
                            'elements' => $group->musics
                        ]);
                    }),
                TD::make('artists', 'Artists')
                    ->render(function (Studio $group) {
                        return view('list', [
                            'elements' => $group->artists
                        ]);
                    }),
                TD::make('groups', 'Groups')
                    ->render(function (Studio $group) {
                        return view('list', [
                            'elements' => $group->groups
                        ]);
                    }),
                TD::make('icon')
                    ->render(function (Studio $group) {
                        return view('image', [
                            'image' => $group->icon
                        ]);
                    })
            ]),

            Layout::modal('studioModal', Layout::rows([
                Input::make('name')->title('Name')->placeholder('input artist name'),
                Relation::make('artists')->title('Artists')->multiple()->fromModel(Artist::class, 'username', 'id'),
                Relation::make('musics')->title('Musics')->multiple()->fromModel(Music::class, 'name', 'id'),
                Relation::make('group_id')->title('Groups')->multiple()->fromModel(Group::class, 'name', 'id'),
                Picture::make('icon ')
                    ->storage('icon')
            ]))
        ];
    }

    public function create(Request $request)
    {
        $studioValidate = $request->validate([
            'name' => 'required|min:3',
            'group_id' => 'required|min:3',
            'icon' => 'required',
        ]);
        
        $studio = Studio::create($studioValidate);

        $studio->musics()->attach($request->musics);
        $studio->artists()->attach($request->artists);
        $studio->groups()->attach($request->group_id);

        Alert::message('Successfully created group');
    }
}