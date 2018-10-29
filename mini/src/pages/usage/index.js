import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Api from '../../utils/api';

class Usage extends Component {
  constructor(props) {
    super();
    this.state = {
      cn: '',
      data: {},
    }
  }
  componentWillMount () {
      
    const data =  {"numExp":"162","relative":[{"word":"周章狼狽ぶり ","percent":"7"},{"word":"周章狼狽する ","percent":"7"}],"sentences":[{"source":"janovel-20140406","title":"スタンダール／大久保和郎訳『パルムの僧院（下）』","properties":{"next_sentence":"おもてむきはこんな狭い階段で大公の武官の邪魔をしてはと思って先に降りて行ったように見えたが、実際は早く逃げ出して姿をくらましたかったのだ。","mecab_output":"この\t連体詞,*,*,*,*,*,この,コノ,コノ\n連中\t名詞,一般,*,*,*,*,連中,レンチュウ,レンチュー\nは\t助詞,係助詞,*,*,*,*,は,ハ,ワ\n毒\t名詞,一般,*,*,*,*,毒,ドク,ドク\nを\t助詞,格助詞,一般,*,*,*,を,ヲ,ヲ\n見破ら\t動詞,自立,*,*,五段・ラ行,未然形,見破る,ミヤブラ,ミヤブラ\nれ\t動詞,接尾,*,*,一段,連用形,れる,レ,レ\nた\t助動詞,*,*,*,特殊・タ,基本形,た,タ,タ\nと\t助詞,格助詞,引用,*,*,*,と,ト,ト\n聞く\t動詞,自立,*,*,五段・カ行イ音便,基本形,聞く,キク,キク\nと\t助詞,格助詞,引用,*,*,*,と,ト,ト\n周章\t名詞,サ変接続,*,*,*,*,周章,シュウショウ,シューショー\n狼狽\t名詞,サ変接続,*,*,*,*,狼狽,ロウバイ,ローバイ\nし\t動詞,自立,*,*,サ変・スル,連用形,する,シ,シ\nて\t助詞,接続助詞,*,*,*,*,て,テ,テ\n急い\t動詞,自立,*,*,五段・ガ行,連用タ接続,急ぐ,イソイ,イソイ\nで\t助詞,接続助詞,*,*,*,*,で,デ,デ\n降り\t動詞,自立,*,*,一段,連用形,降りる,オリ,オリ\nて\t助詞,接続助詞,*,*,*,*,て,テ,テ\n行っ\t動詞,非自立,*,*,五段・カ行促音便,連用タ接続,行く,イッ,イッ\nた\t助動詞,*,*,*,特殊・タ,基本形,た,タ,タ\n。\t記号,句点,*,*,*,*,。,。,。\nEOS","prev_sentence":"将軍は蒼白になり茫然自失して、ファブリツィオの求めた命令を自分について来た上級の獄吏たちに伝えた。"},"sentence":"この連中は毒を見破られたと聞くと周章狼狽して急いで降りて行った。"},{"source":"janovel-20140406","title":"伊藤整『太平洋戦争日記（三）』","properties":{"next_sentence":"国民は二人寄れば疎開や荷物の運搬のことを話し、また敵の上陸は、いつ頃どこへやって来るかということに落ちる。","mecab_output":"これ\t名詞,代名詞,一般,*,*,*,これ,コレ,コレ\nで\t助詞,格助詞,一般,*,*,*,で,デ,デ\n凡人\t名詞,一般,*,*,*,*,凡人,ボンジン,ボンジン\nの\t助詞,連体化,*,*,*,*,の,ノ,ノ\n国民\t名詞,一般,*,*,*,*,国民,コクミン,コクミン\nが\t助詞,格助詞,一般,*,*,*,が,ガ,ガ\n周章\t名詞,サ変接続,*,*,*,*,周章,シュウショウ,シューショー\n狼狽\t名詞,サ変接続,*,*,*,*,狼狽,ロウバイ,ローバイ\nする\t動詞,自立,*,*,サ変・スル,基本形,する,スル,スル\nの\t名詞,非自立,一般,*,*,*,の,ノ,ノ\nも\t助詞,係助詞,*,*,*,*,も,モ,モ\n無理\t名詞,形容動詞語幹,*,*,*,*,無理,ムリ,ムリ\nと\t助詞,格助詞,引用,*,*,*,と,ト,ト\nは\t助詞,係助詞,*,*,*,*,は,ハ,ワ\n言わ\t動詞,自立,*,*,五段・ワ行促音便,未然形,言う,イワ,イワ\nれ\t動詞,接尾,*,*,一段,未然形,れる,レ,レ\nない\t助動詞,*,*,*,特殊・ナイ,基本形,ない,ナイ,ナイ\nの\t名詞,非自立,一般,*,*,*,の,ノ,ノ\nで\t助動詞,*,*,*,特殊・ダ,連用形,だ,デ,デ\nある\t助動詞,*,*,*,五段・ラ行アル,基本形,ある,アル,アル\n。\t記号,句点,*,*,*,*,。,。,。\nEOS","prev_sentence":"しかも敵は九州のすぐ南まで肉迫しており、本土上陸を呼号し、我政府また敵の上陸近し、それに備えよと機会あるごとに言っている。"},"sentence":"これで凡人の国民が周章狼狽するのも無理とは言われないのである。"},{"source":"janovel-20140406","title":"リラダン『殘酷物語』","properties":{"next_sentence":"巡査は入口に突つ立ち、腕組みをしたまま、冷やかな視線で、遅くなつた主人を苛立たせてゐるのであつた。","mecab_output":"突然\t副詞,助詞類接続,*,*,*,*,突然,トツゼン,トツゼン\nやつ\t名詞,代名詞,一般,*,*,*,やつ,ヤツ,ヤツ\nて\t助詞,格助詞,連語,*,*,*,て,テ,テ\n来\t動詞,自立,*,*,カ変・来ル,連用形,来る,キ,キ\nた\t助動詞,*,*,*,特殊・タ,基本形,た,タ,タ\n二\t名詞,数,*,*,*,*,二,ニ,ニ\n人\t名詞,接尾,助数詞,*,*,*,人,ニン,ニン\nの\t助詞,連体化,*,*,*,*,の,ノ,ノ\n巡査\t名詞,一般,*,*,*,*,巡査,ジュンサ,ジュンサ\nの\t助詞,連体化,*,*,*,*,の,ノ,ノ\n脅威\t名詞,一般,*,*,*,*,脅威,キョウイ,キョーイ\n的\t名詞,接尾,形容動詞語幹,*,*,*,的,テキ,テキ\nな\t助動詞,*,*,*,特殊・ダ,体言接続,だ,ナ,ナ\n存在\t名詞,サ変接続,*,*,*,*,存在,ソンザイ,ソンザイ\nが\t助詞,格助詞,一般,*,*,*,が,ガ,ガ\n、\t記号,読点,*,*,*,*,、,、,、\nこの\t連体詞,*,*,*,*,*,この,コノ,コノ\n周章\t名詞,サ変接続,*,*,*,*,周章,シュウショウ,シューショー\n狼狽\t名詞,サ変接続,*,*,*,*,狼狽,ロウバイ,ローバイ\nの\t助詞,連体化,*,*,*,*,の,ノ,ノ\n原因\t名詞,一般,*,*,*,*,原因,ゲンイン,ゲンイン\nで\t助詞,格助詞,一般,*,*,*,で,デ,デ\nあつ\t形容詞,自立,*,*,形容詞・アウオ段,ガル接続,あつい,アツ,アツ\nた\t助動詞,*,*,*,特殊・タ,基本形,た,タ,タ\n。\t記号,句点,*,*,*,*,。,。,。\nEOS","prev_sentence":"一方ではニッケル製貯金箱の中身を騒々しくひつくり返し、盆の上に一日の収入を円形に積みあげてゐた。"},"sentence":"突然やつて来た二人の巡査の脅威的な存在が、この周章狼狽の原因であつた。"},{"source":"aozora-20140120","title":"ルブラン・モーリス『探偵小説アルセーヌ・ルパン』","properties":{"next_sentence":"でも何だか急に空気が重苦しく感じて、みんな一時も早くこの家を去りたいと思った。","mecab_output":"そして\t接続詞,*,*,*,*,*,そして,ソシテ,ソシテ\n誰\t名詞,代名詞,一般,*,*,*,誰,ダレ,ダレ\nも\t助詞,係助詞,*,*,*,*,も,モ,モ\n今\t接頭詞,名詞接続,*,*,*,*,今,コン,コン\n自分\t名詞,一般,*,*,*,*,自分,ジブン,ジブン\n等\t名詞,接尾,一般,*,*,*,等,トウ,トー\nが\t助詞,格助詞,一般,*,*,*,が,ガ,ガ\nとっ\t動詞,自立,*,*,五段・ラ行,連用タ接続,とる,トッ,トッ\nた\t助動詞,*,*,*,特殊・タ,基本形,た,タ,タ\n周章\t名詞,サ変接続,*,*,*,*,周章,シュウショウ,シューショー\n狼狽\t名詞,サ変接続,*,*,*,*,狼狽,ロウバイ,ローバイ\nの\t助詞,連体化,*,*,*,*,の,ノ,ノ\nあり\t動詞,自立,*,*,五段・ラ行,連用形,ある,アリ,アリ\nさま\t名詞,接尾,人名,*,*,*,さま,サマ,サマ\nを\t助詞,格助詞,一般,*,*,*,を,ヲ,ヲ\n極り\t名詞,一般,*,*,*,*,極り,キマリ,キマリ\n悪く\t形容詞,自立,*,*,形容詞・アウオ段,連用テ接続,悪い,ワルク,ワルク\n思っ\t動詞,自立,*,*,五段・ワ行促音便,連用タ接続,思う,オモッ,オモッ\nて\t助詞,接続助詞,*,*,*,*,て,テ,テ\n笑い\t名詞,一般,*,*,*,*,笑い,ワライ,ワライ\n濁し\t動詞,自立,*,*,五段・サ行,連用形,濁す,ニゴシ,ニゴシ\nた\t助動詞,*,*,*,特殊・タ,基本形,た,タ,タ\n。\t記号,句点,*,*,*,*,。,。,。\nEOS","rubies":[[13,"周章狼狽","しゅうしょうろうばい"]],"prev_sentence":"来客は声をあげて打笑った。"},"sentence":"そして誰も今自分等がとった周章狼狽のありさまを極り悪く思って笑い濁した。"},{"source":"aozora-20140120","title":"海野十三『地獄の使者』","properties":{"next_sentence":"これこそ乃ちあの女が当夜鶴彌に毒を盛ったことを示唆している。","mecab_output":"一体\t副詞,一般,*,*,*,*,一体,イッタイ,イッタイ\nあの\t連体詞,*,*,*,*,*,あの,アノ,アノ\n女\t名詞,一般,*,*,*,*,女,オンナ,オンナ\nの\t助詞,連体化,*,*,*,*,の,ノ,ノ\nこの\t連体詞,*,*,*,*,*,この,コノ,コノ\n周章\t名詞,サ変接続,*,*,*,*,周章,シュウショウ,シューショー\n狼狽\t名詞,サ変接続,*,*,*,*,狼狽,ロウバイ,ローバイ\nは\t助詞,係助詞,*,*,*,*,は,ハ,ワ\n何\t名詞,代名詞,一般,*,*,*,何,ナニ,ナニ\nから\t助詞,格助詞,一般,*,*,*,から,カラ,カラ\n起っ\t動詞,自立,*,*,五段・ラ行,連用タ接続,起る,オコッ,オコッ\nた\t助動詞,*,*,*,特殊・タ,基本形,た,タ,タ\nこと\t名詞,非自立,一般,*,*,*,こと,コト,コト\nでしょ\t助動詞,*,*,*,特殊・デス,未然形,です,デショ,デショ\nう\t助動詞,*,*,*,不変化型,基本形,う,ウ,ウ\nか\t助詞,副助詞／並立助詞／終助詞,*,*,*,*,か,カ,カ\n。\t記号,句点,*,*,*,*,。,。,。\nEOS","prev_sentence":"そして自分のハンドバグを残留してこの屋敷を飛出したほどの狼狽ぶりを示している。"},"sentence":"一体あの女のこの周章狼狽は何から起ったことでしょうか。"}]};
    this.setState({
      cn: this.$router.params.word,
      data,
    })
  }
  componentDidMount () {
    // Taro.showLoading({
    //   title: '数据加载中',
    // })
    // Api.request({
    //   action: 'query',
    //   data: {
    //     word: this.state.cn,
    //   },
    //   cb: (res) => {
    //     const data = res.data
    //     console.log(JSON.stringify(data))
    //     Taro.hideLoading()
    //   }
    // })
  }
  render() {
    return (
      <View>
        <Text>{this.state.cn}</Text>
        <Text>{this.state.data.numExp}</Text>
      </View>
    )
  }
}

export default Usage