<?php

namespace App\Orchid\Screens;

use App\Models\Music;
use App\Models\Сomposer;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Fields\Upload;
use Orchid\Screen\Screen;
use Orchid\Screen\TD;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Layout;

class MusicScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [
            'music' => Music::all()
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'MusicScreen';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            ModalToggle::make('Add music')
                ->modal('musicModal')
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
            Layout::table('music', [
                TD::make('name', 'name'),
                TD::make('audition', 'audition'),
                TD::make('genre', 'Genre'),
                TD::make('cover')
                    ->render(function (Music $music) {
                        return view('image', [
                            'image' => $music->cover
                        ]);
                    }),
                TD::make('music')
                    ->render(function (Music $music) {
                        return view('sound', [
                            'sound' => $music->music
                        ]);
                    })

            ]),

            Layout::modal('musicModal', Layout::rows([
                Input::make('name')->title('Name')->placeholder('input artist name'),
                Select::make('genre')->title('Genre')
                    ->options([
                        'rock' => 'rock',
                        'pop' => 'pop',
                        'barococo' => 'barococo',
                        'hip hop' => 'hip hop',
                    ]),
                Relation::make('composers')->multiple()->title('Composers')->fromModel(Сomposer::class, 'username', 'id'),
                Picture::make('cover')
                    ->storage('cover'),
                Upload::make('music') 
                    ->form()
                    ->acceptedFiles()
                    // ->maxFiles(1)
                    ->storage('music')
            ]))
        ];
    }

    public function create(Request $request)
    {
        $musicValidate = $request->validate([
            'name' => 'required',
            'genre' => 'required',
            'cover' => 'required',
            'music' => 'required',
        ]);



        $musicValidate['music'] = $musicValidate['music'][0];

        $music = Music::create($musicValidate);

        $music->composers()->attach($request->composers);


        Alert::message('Successfully created music');
    }
}